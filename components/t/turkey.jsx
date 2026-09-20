import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/relf4wlgz.css';
import '../../css/v/vlm33lmng.css';
import '../../css/s/snp287xku.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="relf4wlgz"/><path class="vlm33lmng"/><path class="snp287xku"/>`,
		"fallback": "streamline-emojis:turkey",
	});
}

export default Component;
