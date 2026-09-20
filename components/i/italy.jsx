import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qnnw6covj.css';
import '../../css/i/ic3k8sg0i.css';
import '../../css/e/en8yfccur.css';
import '../../css/s/snp287xku.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qnnw6covj"/><path class="ic3k8sg0i"/><path class="en8yfccur"/><path class="snp287xku"/>`,
		"fallback": "streamline-emojis:italy",
	});
}

export default Component;
