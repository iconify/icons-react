import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-c2kjb1l.css';
import '../../css/i/ils9n7g9i.css';
import '../../css/t/tolqikb-l.css';
import '../../css/t/tnhufabrj.css';
import '../../css/c/cgm_0qs_n.css';
import '../../css/p/plwejqbby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-c2kjb1l wm-shadow"/><path class="ils9n7g9i wm-k"/><path class="tolqikb-l wm-k"/><path class="tnhufabrj wm-k"/><path class="cgm_0qs_n wm-k"/><path class="plwejqbby wm-shine"/>`,
		"fallback": "withicons-pastel:minimize-2",
	});
}

export default Component;
