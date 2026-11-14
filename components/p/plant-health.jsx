import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.d7wpbpzyh {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M20.5 2.75Q2.75 2.75 2.75 20.5q0 .074.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014q17.75 0 17.75-17.75q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014m-8.903 12.883Q8.5 13.662 8.5 11.25q0-2.5 2.5-2.5q.569 0 1 .318q.431-.318 1-.318q2.5 0 2.5 2.5q0 2.412-3.097 4.383q-.091.057-.193.087t-.21.03q-.107 0-.21-.03q-.102-.03-.193-.087");
}
</style><path class="d7wpbpzyh"/>`,
		"fallback": "uix-solid:plant-health",
	});
}

export default Component;
