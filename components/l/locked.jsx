import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.glvam4ett {
  fill: var(--svg-color--989897, #989897);
  d: path("M32.326 1.02C18.222.42 6.676 13.482 6.996 27.073c.029 1.363 1.112 2.5 2.498 2.5h2.6c.648 0 1.161-.207 1.546-.534c.576-.393.968-1.04.954-1.966c-.61-23.741 36.064-23.741 35.457 0c-.03 1.363 1.167 2.5 2.502 2.5h2.597c1.39 0 2.47-1.137 2.502-2.5C57.995 12.576 46.396 1.626 32.32 1.02");
}

.hb0-_p32k {
  fill: var(--svg-color--f79421, #f79421);
  d: path("M5.804 62.996h53.031c.445 0 .806-.264.806-.57V25.758c0-.309-.361-.568-.806-.568H5.804c-.24 0-.422.058-.547.152c0 0-.009.009-.014.017q-.018-.001-.027.02a.44.44 0 0 0-.216.379V62.43c0 .306.368.57.804.57");
}
</style><path class="glvam4ett"/><path class="hb0-_p32k"/>`,
		"fallback": "emojione-v1:locked",
	});
}

export default Component;
