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
		"content": `<style>.w89x6xn9f {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M7.25 16.25v-4.076q-1.5-.337-1.5-2.174q0-2.25 2.25-2.25q.918 0 1.461.374l4.123-2.748q.152-.101.333-.121l.033-.003q.146-.01.285.036t.25.14l.009.008l4 3.5q.112.098.178.232q.066.133.076.282l.002.05v2.75h.75q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146t-.014.146q-.015.073-.043.141t-.069.13t-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014h-3q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069q-.061-.041-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141T15.75 13t.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043t.146-.014h.75V9.84l-3.312-2.897l-3.73 2.486q.042.265.042.571q0 1.837-1.5 2.174v4.076h1.5q1.036 0 1.768.732t.732 1.768t-.732 1.768t-1.768.732h-4.5q-2.5 0-2.5-2.5q0-1.036.732-1.768t1.768-.732z");
}
</style><path class="w89x6xn9f"/>`,
		"fallback": "uix-solid:robotic-arm-picking",
	});
}

export default Component;
