import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7ezmybgf.css';
import '../../css/e/elzyb5xmp.css';
import '../../css/o/ovlh7zbng.css';
import '../../css/n/nqumikboa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r7ezmybgf"/><path class="elzyb5xmp"/><path class="ovlh7zbng"/><path class="nqumikboa"/>`,
		"fallback": "energy-icons:mine-water-48",
	});
}

export default Component;
