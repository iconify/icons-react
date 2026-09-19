import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/u/uuky_gise.css';
import '../../css/t/tkf4ddvli.css';
import '../../css/u/u2ase3byr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><circle class="uuky_gise"/><path class="tkf4ddvli"/><path class="u2ase3byr"/></g>`,
		"fallback": "iconamoon:slightly-smiling-face-light",
	});
}

export default Component;
