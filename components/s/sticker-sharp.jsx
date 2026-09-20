import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.w0ud4dexg {
  fill: currentColor;
  d: path("M11.5 14.73q1.494 0 2.654-.922q1.16-.923 1.5-2.373L8.5 13.454q.592.627 1.367.952t1.633.325m-4.073-3.712l2.38-.673q.062-.565-.33-.985q-.392-.419-.977-.419q-.548 0-.928.38t-.38.928q0 .217.071.4t.164.37m6-1.75l2.38-.674q.068-.565-.327-.985t-.98-.419q-.548 0-.928.38t-.38.928q0 .217.071.4t.164.37M15.577 20H4V4h16v11.577zM15 19l4-4h-4z");
}
</style><path class="w0ud4dexg"/>`,
		"fallback": "material-symbols-light:sticker-sharp",
	});
}

export default Component;
