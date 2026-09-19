import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/g/ggml7abuz.css';
import '../../css/k/kd_0y5b8q.css';
import '../../css/i/i_84bmb_e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGJ6yoqbiA"><g class="v3_i3wktz"><path class="ggml7abuz"/><path class="kd_0y5b8q"/><path class="i_84bmb_e"/></g></mask></defs><path mask="url(#SVGJ6yoqbiA)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:thermometer",
	});
}

export default Component;
