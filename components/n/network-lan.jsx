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
		"content": `<style>.iu6k0fbwi {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5.125 2.25h2.75q1.398 0 2.386.989q.989.988.989 2.386v1.25q0 3.375-3.375 3.375H7.25v1.5h9.5v-1.5h-.625q-3.375 0-3.375-3.375v-1.25q0-1.398.989-2.386q.988-.989 2.386-.989h2.75q1.398 0 2.386.989q.989.988.989 2.386v1.25q0 3.375-3.375 3.375h-.625v2.25q0 .074-.014.146q-.015.073-.043.141t-.069.13t-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014h-4.75v3h.5q1.036 0 1.768.732t.732 1.768v1q0 1.036-.732 1.768t-1.768.732h-2.5q-1.036 0-1.768-.732T8.25 19.75v-1q0-2.5 2.5-2.5h.5v-3H6.5q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069q-.061-.041-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141t-.014-.146v-2.25h-.625q-3.375 0-3.375-3.375v-1.25q0-1.398.989-2.386q.988-.989 2.386-.989");
}
</style><path class="iu6k0fbwi"/>`,
		"fallback": "uix-solid:network-lan",
	});
}

export default Component;
