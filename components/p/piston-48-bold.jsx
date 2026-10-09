import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awsea6blm.css';
import '../../css/o/o9nde9b-c.css';
import '../../css/x/xmrhsdbaq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awsea6blm"/><path class="o9nde9b-c"/><path class="xmrhsdbaq"/>`,
		"fallback": "energy-icons:piston-48-bold",
	});
}

export default Component;
