import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bb-_cqblp.css';
import '../../css/g/g5k8wib8i.css';
import '../../css/x/xkrt0vp1g.css';
import '../../css/g/gv0fbehgq.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bb-_cqblp"/><path class="g5k8wib8i"/><path class="xkrt0vp1g"/><path class="gv0fbehgq"/>`,
		"fallback": "devicon:labview-wordmark",
	});
}

export default Component;
