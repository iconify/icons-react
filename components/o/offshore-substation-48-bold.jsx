import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awsea6blm.css';
import '../../css/e/e7rwfg02i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awsea6blm"/><path class="e7rwfg02i"/>`,
		"fallback": "energy-icons:offshore-substation-48-bold",
	});
}

export default Component;
