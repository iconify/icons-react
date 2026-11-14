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
		"content": `<style>.v16wsl9jt {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2.25 4q0-2.25 2.25-2.25T6.75 4q0 .986-.432 1.54L12 14.59l1.686-2.685l-1.74-5.655Q9.75 6.223 9.75 4q0-2.25 2.25-2.25T14.25 4q0 1.374-.839 1.909l1.328 4.318l2.943-4.687Q17.25 4.986 17.25 4q0-2.25 2.25-2.25T21.75 4T19.5 6.25q-.251 0-.475-.028l-6.275 9.994V21.5q0 .074-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014t-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141t-.014-.146v-5.284L4.975 6.222q-.224.028-.475.028q-2.25 0-2.25-2.25");
}
</style><path class="v16wsl9jt"/>`,
		"fallback": "uix-solid:phylogeny",
	});
}

export default Component;
