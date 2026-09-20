import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
import '../../css/c/cqv8b4b-y.css';
import '../../css/t/tnpb5gbvj.css';
import '../../css/y/yxni68tfc.css';
import '../../css/q/q5cgd9bic.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1mjunbsu"><path class="cqv8b4b-y"/><path class="tnpb5gbvj"/><path class="yxni68tfc"/><path class="q5cgd9bic"/></g>`,
		"fallback": "thesvg-color:kilo-code-dark",
	});
}

export default Component;
