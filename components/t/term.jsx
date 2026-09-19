import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfn4nc9vy.css';
import '../../css/f/fktweubsh.css';
import '../../css/e/e39ud6bwf.css';
import '../../css/l/l5i1aouls.css';
import '../../css/d/dql61db7n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfn4nc9vy"/><circle class="fktweubsh"/><circle class="e39ud6bwf"/><circle class="l5i1aouls"/><path class="dql61db7n"/>`,
		"fallback": "carbon:term",
	});
}

export default Component;
