import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/af9zx_-vp.css';
import '../../css/x/xderynbbj.css';
import '../../css/o/oc-35l-aj.css';
import '../../css/o/ovvqimvbv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="af9zx_-vp"/><path class="xderynbbj"/><path class="oc-35l-aj"/><path class="ovvqimvbv"/>`,
		"fallback": "nonicons:react-16",
	});
}

export default Component;
