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
		"content": `<style>.i4vmxkzqr {
  fill: currentColor;
  d: path("M12.707 16.209q.293-.291.293-.707t-.291-.709t-.707-.293t-.709.291t-.293.707t.291.709t.707.293t.709-.291M9 21q-1.605 0-2.584-.952T4.902 17.72q-.535-1.399-.718-2.941Q4 13.237 4 12.025q0-2.242.346-3.919q.346-1.676 1.262-2.823q.91-1.153 2.44-1.718Q9.58 3 11.999 3t3.952.565q1.532.565 2.442 1.718q.916 1.147 1.262 2.824T20 12.025q0 1.212-.184 2.754q-.183 1.542-.718 2.941q-.534 1.376-1.514 2.328T15 21z");
}
</style><path class="i4vmxkzqr"/>`,
		"fallback": "material-symbols-light:nest-wifi-pro-sharp",
	});
}

export default Component;
