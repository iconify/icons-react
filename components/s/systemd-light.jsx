import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kji3f8xww.css';
import '../../css/m/m0_ghw2pl.css';
import '../../css/i/ietn-5oir.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kji3f8xww"/><circle class="m0_ghw2pl"/><path class="ietn-5oir"/>`,
		"fallback": "material-icon-theme:systemd-light",
	});
}

export default Component;
