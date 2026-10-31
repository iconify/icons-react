import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hehjgvcii.css';
import '../../css/d/d38vmcg6l.css';
import '../../css/s/sn-51ibzv.css';
import '../../css/b/bkx5zc1sa.css';
import '../../css/r/r208_2b8m.css';
import '../../css/a/ak-vafb5s.css';
import '../../css/r/rmx1nb9mq.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hehjgvcii"/><path class="d38vmcg6l"/><path class="sn-51ibzv"/><path class="bkx5zc1sa"/><path class="r208_2b8m"/><path class="ak-vafb5s"/><path class="rmx1nb9mq"/>`,
		"fallback": "iconito:olive-oil",
	});
}

export default Component;
