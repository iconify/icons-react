import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/ujwfe_yor.css';
import '../../css/v/v5s3lxbnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ujwfe_yor"/><path class="v5s3lxbnf"/></g>`,
		"fallback": "mage:link",
	});
}

export default Component;
