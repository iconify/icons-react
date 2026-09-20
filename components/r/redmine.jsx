import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lselpo6vl.css';
import '../../css/o/ouy5mx2vl.css';
import '../../css/q/qs5nksrys.css';
import '../../css/r/r4hdmd--z.css';
import '../../css/q/q3c0jibht.css';
import '../../css/i/i9xzmf0fx.css';
import '../../css/w/w-m7llbyo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lselpo6vl"/><path clip-rule="evenodd" class="ouy5mx2vl"/><path clip-rule="evenodd" class="qs5nksrys"/><path clip-rule="evenodd" class="r4hdmd--z"/><path clip-rule="evenodd" class="q3c0jibht"/><path clip-rule="evenodd" class="i9xzmf0fx"/><path class="w-m7llbyo"/>`,
		"fallback": "selfhst:redmine",
	});
}

export default Component;
