import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-jbwsbtj.css';
import '../../css/k/k1oo7kv7m.css';
import '../../css/m/m-iytloac.css';
import '../../css/b/bwkvv2mxj.css';
import '../../css/f/fvry82veo.css';
import '../../css/z/zgtwj8bin.css';
import '../../css/a/actplckew.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-jbwsbtj"/><path class="k1oo7kv7m"/><path class="m-iytloac"/><path class="bwkvv2mxj"/><path class="fvry82veo"/><g><path class="zgtwj8bin"/></g><path class="actplckew"/>`,
		"fallback": "ion:ios-partlysunny-outline",
	});
}

export default Component;
