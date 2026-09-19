import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/x/xk_cgrbsu.css';
import '../../css/q/qkn850bsj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG13r5ZdxF"><g class="rohhhzb0l"><circle class="xk_cgrbsu"/><path class="qkn850bsj"/></g></mask></defs><path mask="url(#SVG13r5ZdxF)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:unlock-one",
	});
}

export default Component;
