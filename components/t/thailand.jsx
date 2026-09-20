import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pluaf6bjt.css';
import '../../css/z/zr9d5fboj.css';
import '../../css/i/iujo-ccta.css';
import '../../css/s/snp287xku.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pluaf6bjt"/><path class="zr9d5fboj"/><path class="iujo-ccta"/><path class="snp287xku"/>`,
		"fallback": "streamline-emojis:thailand",
	});
}

export default Component;
