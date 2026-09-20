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
		"content": `<style>.pspx45b8j {
  fill: currentColor;
  d: path("M13.385 15.923q-.344 0-.576-.232t-.232-.576V12.5h-9q-.212 0-.356-.144t-.144-.357t.144-.356t.356-.143h9V8.885q0-.344.232-.576t.576-.232h6.23q.344 0 .576.232t.232.576v6.23q0 .344-.232.576t-.575.232z");
}
</style><path class="pspx45b8j"/>`,
		"fallback": "material-symbols-light:line-end-square-rounded",
	});
}

export default Component;
