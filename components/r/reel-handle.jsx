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
		"content": `<style>.aevou-byn {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M14 2.75H6q-.074 0-.146.014q-.073.015-.141.043t-.13.069q-.061.041-.113.094q-.053.052-.094.113t-.069.13t-.043.141t-.014.146t.014.146q.015.073.043.141t.069.13t.094.113q.052.053.113.094t.13.069t.141.043T6 4.25h3.25v1.53q-2.937.24-5.084 2.386Q1.75 10.583 1.75 14t2.416 5.834T10 22.25t5.834-2.416Q18.25 17.417 18.25 14q0-3.036-1.907-5.282l1.625-1.625q.437.157 1.032.157q2.25 0 2.25-2.25T19 2.75T16.75 5q0 .595.157 1.032l-1.625 1.625Q13.318 5.989 10.75 5.78V4.25H14q.074 0 .146-.014q.073-.015.141-.043t.13-.069t.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146t-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043Q14.074 2.75 14 2.75M7.25 14q0-2.75 2.75-2.75T12.75 14T10 16.75T7.25 14");
}
</style><path class="aevou-byn"/>`,
		"fallback": "uix-solid:reel-handle",
	});
}

export default Component;
