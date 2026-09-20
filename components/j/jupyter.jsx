import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ish5habrg.css';
import '../../css/o/oo48_6r0q.css';
import '../../css/x/xkadkob3k.css';
import '../../css/y/y92gimbip.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ish5habrg"/><circle class="oo48_6r0q"/><circle class="xkadkob3k"/><circle class="y92gimbip"/>`,
		"fallback": "material-icon-theme:jupyter",
	});
}

export default Component;
