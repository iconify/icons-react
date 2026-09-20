import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7cmvbi9a.css';
import '../../css/s/s198agbbv.css';
import '../../css/b/bx5f9yspe.css';
import '../../css/e/ecw69kb6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="r7cmvbi9a"><path class="s198agbbv"/><path class="bx5f9yspe"/><path class="ecw69kb6h"/></g>`,
		"fallback": "streamline-ultimate:text-format-dottted-underline-bold",
	});
}

export default Component;
