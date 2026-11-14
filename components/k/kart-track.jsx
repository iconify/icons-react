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
		"content": `<style>.ug-zdzbmg {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M16 2.75H6q-1.76 0-3.005 1.245T1.75 7v1.5q0 2.25 2.25 2.25h7.5q1.25 0 1.25 1.25t-1.25 1.25H4q-2.25 0-2.25 2.25V17q0 1.76 1.245 3.005T6 21.25h10q1.76 0 3.005-1.245T20.25 17v-4.25h1.25q.074 0 .146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146t-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014h-1.25V7q0-1.76-1.245-3.005T16 2.75");
}
</style><path class="ug-zdzbmg"/>`,
		"fallback": "uix-solid:kart-track",
	});
}

export default Component;
