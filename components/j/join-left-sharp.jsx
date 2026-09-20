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
		"content": `<style>.sixkebw_p {
  fill: currentColor;
  d: path("M8 18q-2.502 0-4.251-1.749T2 12t1.749-4.251T8 6q.906 0 1.736.26t1.525.754q-1.026.975-1.586 2.27q-.56 1.297-.56 2.716t.56 2.716t1.587 2.27q-.696.495-1.526.754Q8.906 18 8 18m8 0q-.906 0-1.735-.26t-1.527-.753q.195-.177.368-.378l.344-.401q.544.377 1.189.584T16 17q2.075 0 3.538-1.463T21 12t-1.463-3.537T16 7q-.717 0-1.362.208t-1.188.584l-.344-.4q-.173-.201-.367-.379q.695-.494 1.525-.753Q15.095 6 16 6q2.502 0 4.251 1.749T22 12t-1.749 4.251T16 18m-4-1.558q-.944-.84-1.472-2T10 12t.528-2.442t1.472-2q.944.84 1.472 2T14 12t-.528 2.442t-1.472 2");
}
</style><path class="sixkebw_p"/>`,
		"fallback": "material-symbols-light:join-left-sharp",
	});
}

export default Component;
