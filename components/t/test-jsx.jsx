import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nycdyjolw.css';
import '../../css/o/o7pmz67-b.css';
import '../../css/k/k8-ktvkft.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nycdyjolw"/><circle class="o7pmz67-b"/><path class="k8-ktvkft"/>`,
		"fallback": "material-icon-theme:test-jsx",
	});
}

export default Component;
