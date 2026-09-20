import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.m-nyiucow {
  fill: currentColor;
  d: path("M10.871 1.015a.5.5 0 0 1 .364.606l-.25 1a.5.5 0 1 1-.97-.242l.25-1a.5.5 0 0 1 .606-.364m2.983 1.132a.5.5 0 0 1 0 .707l-1 1a.5.5 0 0 1-.708-.707l1-1a.5.5 0 0 1 .708 0m-7.57 10.886a2 2 0 0 0 3.63-1.605zm-.92.406l-.998.442a1.4 1.4 0 0 1-1.555-.29l-.4-.399a1.39 1.39 0 0 1-.293-1.548l3.871-8.808a1.4 1.4 0 0 1 2.269-.427l5.332 5.316a1.395 1.395 0 0 1-.422 2.264l-2.335 1.032a3 3 0 0 1-5.469 2.418M14.5 5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1");
}
</style><path class="m-nyiucow"/>`,
		"fallback": "fluent:megaphone-loud-16-filled",
	});
}

export default Component;
