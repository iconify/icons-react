import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/skpuwqb8f.css';
import '../../css/f/fpr7cciqd.css';
import '../../css/k/k06zoub9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="skpuwqb8f"/><path class="fpr7cciqd"/><path class="k06zoub9y"/></g>`,
		"fallback": "streamline-ultimate:team-meeting",
	});
}

export default Component;
