import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzl8onbyv.css';
import '../../css/a/af2-mdbqx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fzl8onbyv"/><path class="af2-mdbqx"/>`,
		"fallback": "carbon:js-error",
	});
}

export default Component;
