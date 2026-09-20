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
		"content": `<style>.f5zkk-bss {
  fill: currentColor;
  d: path("m20.516 14.154l-6.362 6.362q-.245.242-.551.363t-.61.121t-.605-.121t-.546-.363L3.48 12.17q-.237-.217-.358-.518q-.121-.3-.121-.632V4.634q0-.674.472-1.154T4.635 3h6.386q.324 0 .629.131t.527.354l8.339 8.344q.25.245.364.551t.114.617t-.114.61t-.364.547M6.55 7.558q.421 0 .714-.292t.294-.708q0-.425-.292-.722t-.708-.297q-.425 0-.722.295t-.297.716t.295.715t.716.293");
}
</style><path class="f5zkk-bss"/>`,
		"fallback": "material-symbols-light:sell",
	});
}

export default Component;
