import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/l/ld7ufs_og.css';
import '../../css/m/mk6mgfuwl.css';
import '../../css/r/rtc4dqblo.css';
import '../../css/w/wartxbcek.css';
import '../../css/o/of73web4m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="ld7ufs_og"/><path class="mk6mgfuwl"/><path class="rtc4dqblo"/><path class="wartxbcek"/><path class="of73web4m"/></g>`,
		"fallback": "icon-park:share-one",
	});
}

export default Component;
