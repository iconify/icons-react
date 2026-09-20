import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kr3f-ybrp.css';
import '../../css/f/fr0ie9bpz.css';
import '../../css/r/ra2n4-fij.css';
import '../../css/q/q-z4mdzwg.css';
import '../../css/v/vves83b9d.css';
import '../../css/c/czt7bt5ky.css';
import '../../css/j/jdghd1bsu.css';
import '../../css/w/wyixn5bkd.css';
import '../../css/z/z-1yu3l4s.css';
import '../../css/z/z7y3lc4je.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kr3f-ybrp"/><path class="fr0ie9bpz"/><path class="ra2n4-fij"/><path class="q-z4mdzwg"/><path class="vves83b9d"/><path class="czt7bt5ky"/><path class="jdghd1bsu"/><path class="wyixn5bkd"/><path class="z-1yu3l4s"/><path class="z7y3lc4je"/>`,
		"fallback": "streamline-emojis:melon-2",
	});
}

export default Component;
