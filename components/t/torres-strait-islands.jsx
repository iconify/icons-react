import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/p/p7u1zwb7z.css';
import '../../css/w/w5dx0bcnx.css';
import '../../css/a/albi6hp1b.css';
import '../../css/t/ttstsac7s.css';
import '../../css/z/z8dpbzzhg.css';
import '../../css/w/w_1cmukes.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="circleFlagsTorresStraitIslands0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsTorresStraitIslands0)"><path class="p7u1zwb7z"/><path class="w5dx0bcnx"/><path class="albi6hp1b"/><path class="ttstsac7s"/><path class="z8dpbzzhg"/><path class="w_1cmukes"/></g>`,
		"fallback": "circle-flags:torres-strait-islands",
	});
}

export default Component;
