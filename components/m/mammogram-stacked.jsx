import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qy_kkbbcz.css';
import '../../css/b/b2wwm0bgg.css';
import '../../css/w/wv3pq4uzf.css';
import '../../css/g/gl84sdyro.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qy_kkbbcz"/><path class="b2wwm0bgg"/><path class="wv3pq4uzf"/><path class="gl84sdyro"/>`,
		"fallback": "carbon:mammogram-stacked",
	});
}

export default Component;
