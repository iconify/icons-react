import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nh6bq8bza.css';
import '../../css/l/l4sqs0dnz.css';
import '../../css/b/ba-heypaf.css';
import '../../css/z/zwi0ylbnr.css';
import '../../css/z/zrgnlznvj.css';
import '../../css/u/u7tit5x5m.css';
import '../../css/k/kabonubtr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nh6bq8bza"/><path class="l4sqs0dnz"/><path class="ba-heypaf"/><path class="zwi0ylbnr"/><path class="zrgnlznvj"/><path class="u7tit5x5m"/><path clip-rule="evenodd" class="kabonubtr"/>`,
		"fallback": "solar:shield-network-bold",
	});
}

export default Component;
