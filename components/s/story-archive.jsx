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
		"content": `<style>.tx4ctrbeq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.5 2.75a8.5 8.5 0 0 1 7 8.25m-7.537 8.468q-.26.03-.521.043q-.261.014-.522.011q-.262-.002-.523-.021q-.26-.018-.52-.053q-.259-.034-.516-.085q-.256-.05-.509-.116t-.502-.148q-.248-.081-.491-.178t-.48-.208q-.236-.111-.466-.237q-.229-.126-.45-.265q-.221-.14-.433-.293t-.415-.318q-.202-.166-.394-.344t-.372-.367T4.5 16.5M3 14A8.5 8.5 0 0 1 9.5 2.75m5.25 12h7v2.75h-7Zm.75 2.75v4H21v-4");
}
</style><path class="tx4ctrbeq"/>`,
		"fallback": "uix-sharp:story-archive",
	});
}

export default Component;
