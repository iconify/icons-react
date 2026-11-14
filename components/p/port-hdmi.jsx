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
		"content": `<style>.s-zyo1_gr {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M19.75 6.75H4.25q-2.5 0-2.5 2.5v2.667q0 .833.5 1.5l2.125 2.833q.75 1 2 1h11.25q1.25 0 2-1l2.125-2.833q.5-.667.5-1.5V9.25q0-1.036-.732-1.768T19.75 6.75m-2.25 4q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146t-.014.146q-.015.073-.043.141t-.069.13t-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014h-11q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069q-.061-.041-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141t-.014-.146t.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043t.146-.014z");
}
</style><path class="s-zyo1_gr"/>`,
		"fallback": "uix-solid:port-hdmi",
	});
}

export default Component;
