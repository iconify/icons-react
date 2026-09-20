import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gc5yvmb1d.css';
import '../../css/b/b0i-7pbeq.css';
import '../../css/i/iperudbvd.css';
import '../../css/i/ik4d6-bvc.css';
import '../../css/s/sqy45hlmb.css';
import '../../css/r/r1r3ozbdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gc5yvmb1d"/><path class="b0i-7pbeq"/><path class="iperudbvd"/><path class="ik4d6-bvc"/><path class="sqy45hlmb"/><path class="r1r3ozbdb"/></g>`,
		"fallback": "streamline-cyber-color:presentation-2",
	});
}

export default Component;
