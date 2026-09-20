import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qvbrehbrw.css';
import '../../css/q/qcxhw2byu.css';
import '../../css/s/sp2rwd6_z.css';
import '../../css/r/rzhpwcb9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qvbrehbrw"/><path class="qcxhw2byu"/><path class="sp2rwd6_z"/><path class="rzhpwcb9d"/></g>`,
		"fallback": "streamline-ultimate:synchronize-arrows-three",
	});
}

export default Component;
