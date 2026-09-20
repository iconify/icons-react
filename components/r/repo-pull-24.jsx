import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ceknmg57b.css';
import '../../css/a/agohndbfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ceknmg57b"/><path class="agohndbfp"/>`,
		"fallback": "octicon:repo-pull-24",
	});
}

export default Component;
