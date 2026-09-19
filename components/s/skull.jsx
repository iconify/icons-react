import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/e/ewcc34bhv.css';
import '../../css/k/k8mutcwuq.css';
import '../../css/v/v-2zg7byz.css';
import '../../css/s/skwuo4btv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG6B8DTsOJ"><g class="v3_i3wktz"><path class="ewcc34bhv"/><path class="k8mutcwuq"/><path class="v-2zg7byz"/><path class="skwuo4btv"/></g></mask></defs><path mask="url(#SVG6B8DTsOJ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:skull",
	});
}

export default Component;
