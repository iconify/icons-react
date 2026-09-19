import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5i1aouls.css';
import '../../css/f/fktweubsh.css';
import '../../css/e/e39ud6bwf.css';
import '../../css/s/svdy80z7e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="l5i1aouls"/><circle class="fktweubsh"/><circle class="e39ud6bwf"/><path class="svdy80z7e"/>`,
		"fallback": "carbon:pending",
	});
}

export default Component;
