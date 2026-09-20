import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pswvvyb7g.css';
import '../../css/u/u-pu14bwo.css';
import '../../css/k/k78jxprsf.css';
import '../../css/s/s2mndpb-r.css';
import '../../css/n/n3m-cyq-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pswvvyb7g"/><path class="u-pu14bwo"/><path class="k78jxprsf"/><path class="s2mndpb-r"/><path class="n3m-cyq-d"/></g>`,
		"fallback": "streamline-ultimate-color:question-help-message",
	});
}

export default Component;
