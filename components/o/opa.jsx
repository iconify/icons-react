import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icd4gjbhu.css';
import '../../css/a/acxbn7rlj.css';
import '../../css/u/u6o085bnm.css';
import '../../css/q/q2j8-gpwc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="icd4gjbhu"/><path class="acxbn7rlj"/><path class="u6o085bnm"/><circle class="q2j8-gpwc"/>`,
		"fallback": "material-icon-theme:opa",
	});
}

export default Component;
