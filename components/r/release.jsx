import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dqfvh-g1q.css';
import '../../css/d/dappoac4j.css';
import '../../css/x/xsnosccfg.css';
import '../../css/p/pmjjzy17v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dqfvh-g1q"/><path class="dappoac4j"/><path class="xsnosccfg"/><path class="pmjjzy17v"/>`,
		"fallback": "catppuccin:release",
	});
}

export default Component;
