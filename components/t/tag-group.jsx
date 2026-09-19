import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjnq2n03l.css';
import '../../css/d/dkx4dmkzu.css';
import '../../css/t/tq0faab8f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="mjnq2n03l"/><path class="dkx4dmkzu"/><path class="tq0faab8f"/>`,
		"fallback": "carbon:tag-group",
	});
}

export default Component;
