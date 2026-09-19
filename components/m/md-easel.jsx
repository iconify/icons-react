import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eb6dcj6zj.css';
import '../../css/b/b6j6qhhkx.css';
import '../../css/a/at-jsyr9c.css';
import '../../css/b/brb45-bry.css';
import '../../css/s/s3qm55vhm.css';
import '../../css/v/v7dbonx0t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eb6dcj6zj"/><path class="b6j6qhhkx"/><path class="at-jsyr9c"/><path class="brb45-bry"/><path class="s3qm55vhm"/><path class="v7dbonx0t"/>`,
		"fallback": "ion:md-easel",
	});
}

export default Component;
